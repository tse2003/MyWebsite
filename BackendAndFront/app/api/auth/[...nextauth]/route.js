import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;

                if (!email || !password) {
                    throw new Error("Email and password are required");
                }

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        throw new Error("User not found");
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        throw new Error("Incorrect password");
                    }

                    return { id: user._id, email: user.email };
                } catch (error) {
                    console.error("Authentication error:", error.message);
                    throw new Error("Authentication failed");
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
        error: "/auth/error",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
