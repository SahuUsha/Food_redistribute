"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const pclient = new client_1.PrismaClient();
exports.userRouter = (0, express_1.Router)();
const zod_1 = __importDefault(require("zod"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_KEY = process.env.JWT_KEY;
console.log(JWT_KEY);
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRETE = process.env.CLIENT_SECRETE;
const sendemail = require("../otplogic/otp");
const otp_generator_1 = __importDefault(require("otp-generator"));
exports.userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("reached!!");
    console.log(JWT_KEY);
    try {
        const RequiredTypes = zod_1.default.object({
            name: zod_1.default.string().min(3).max(100),
            email: zod_1.default.string().min(5).max(100).email(),
        });
        const CheckedRequiredTypes = RequiredTypes.safeParse(req.body);
        if (!CheckedRequiredTypes.success) {
            res.status(422).send("Invalid Input types");
            return;
        }
        const { name, email, googleId } = req.body;
        const CheckedByEmail = yield pclient.users.findUnique({
            where: {
                email: email
            }
        });
        if (CheckedByEmail) {
            res.json({
                message: "Email_exists"
            });
            return;
        }
        const PutUserIntoDB = yield pclient.users.create({
            data: {
                googleId: googleId,
                name: name,
                email: email,
                verified: false,
            }
        });
        const CreateOTP = otp_generator_1.default.generate(6, {
            digits: true, upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false
        });
        yield sendemail(email, "OTP-VERIFICATION", CreateOTP);
        const CreateOTPEntryInDB = yield pclient.otpmodel.create({
            data: {
                email: email,
                otp: CreateOTP
            }
        });
        const token = jsonwebtoken_1.default.sign({
            userId: PutUserIntoDB.id
        }, JWT_KEY);
        res.cookie("userId", PutUserIntoDB.id, { httpOnly: false, secure: false });
        res.cookie("uidcookie", token, {
            httpOnly: false,
            secure: false
        });
        res.status(200).send("OTP_Send");
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Something went Wrong!!!");
        return;
    }
}));
exports.userRouter.post("/logout", (req, res) => {
    res.clearCookie("uidcookie", {
        httpOnly: false, // Ensures the cookie cannot be accessed via JavaScript
        secure: true, // Ensures the cookie is only sent over HTTPS
    });
    res.clearCookie("userId", {
        httpOnly: false, // Ensures the cookie cannot be accessed via JavaScript
        secure: true, // Ensures the cookie is only sent over HTTPS
    });
    res.json({
        message: "logout"
    });
});
exports.userRouter.post("/verifyotp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.uidcookie;
    // console.log("here");
    if (!token) {
        res.json({
            message: "Not_SignedIn"
        });
        return;
    }
    const { otp, email } = req.body;
    const FindEmail = yield pclient.users.findUnique({
        where: {
            email
        }
    });
    if (!FindEmail) {
        res.json({
            message: "Not_found"
        });
        return;
    }
    // console.log("here also")
    const FindOTPInDB = yield pclient.otpmodel.findUnique({
        where: {
            otp
        }
    });
    if (!FindOTPInDB) {
        res.json({
            message: "Invalid_otp"
        });
        return;
    }
    const updateUser = yield pclient.users.update({
        where: {
            email: email
        },
        data: {
            verified: true
        }
    });
    const deleteOTPRecord = yield pclient.otpmodel.delete({
        where: {
            otp: otp
        }
    });
    res.json({
        message: "Verified!!"
    });
}));
exports.userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("recieved");
    console.log(req.body);
    try {
        const RequiredTypes = zod_1.default.object({
            email: zod_1.default.string().min(5).max(100).email(),
        });
        const CheckedRequiredTypes = RequiredTypes.safeParse(req.body);
        if (!CheckedRequiredTypes.success) {
            res.status(422).send("Invalid_Input");
            return;
        }
        console.log("here also");
        const { email } = req.body;
        const CheckedByEmail = yield pclient.users.findUnique({
            where: {
                email: email
            }
        });
        if (!CheckedByEmail) {
            res.json({
                message: "not_found"
            });
            return;
        }
        //if email exists but otp not verified then again send OTP to user then 
        //verify otp 
        if (CheckedByEmail && !CheckedByEmail.verified) {
            res.json({
                message: "Look_like_you_are_not_verfied"
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            userId: CheckedByEmail.id
        }, JWT_KEY);
        //  console.log(CheckedByEmail);
        res.cookie("userId", CheckedByEmail.id, { httpOnly: false, secure: false });
        res.cookie("uidcookie", token, {
            httpOnly: false,
            secure: false
        });
        res.json({
            data: CheckedByEmail
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong!!");
        return;
    }
}));
exports.userRouter.get("/auths", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.uidcookie;
    if (!token) {
        res.json({
            message: "unauths"
        });
        return;
    }
    const user = yield pclient.users.findFirst({
        where: {
            id: req.cookies.userId
        }
    });
    res.json({
        message: "authenticated",
        userData: user
    });
}));
exports.userRouter.post("/resend", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.uidcookie;
    if (!token) {
        res.json({
            message: "not_signedIn"
        });
        return;
    }
    const { email } = req.body;
    const deleteOTPRecord = yield pclient.otpmodel.delete({
        where: {
            email: email
        }
    });
    const CreateOTP = otp_generator_1.default.generate(6, {
        upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false
    });
    yield sendemail(email, "OTP-VERIFICATION", CreateOTP);
    const CreateOTPEntryInDB = yield pclient.otpmodel.create({
        data: {
            email: email,
            otp: CreateOTP
        }
    });
    res.json({
        message: "OTP_send_to_your_email"
    });
}));
