import {betterAuth} from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/db";
import { polar, checkout, portal} from "@polar-sh/better-auth";
import {polarClient} from "./polar";
export const auth=betterAuth({
    database: prismaAdapter(prisma,{
        provider:"postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn:true,
    },
    plugins: [
        polar({
            client:polarClient,
            createCustomerOnSignUp:true,
            use: [
                checkout({
                    products: [
                        {
                            productId:"d3dc29a8-362d-424f-ad25-666e13a9fa78",
                            slug:"pro",
                        }
                    ],
                    successUrl: process.env.POLAR_SUCCESS_URL,
                    authenticatedUsersOnly:true,

                }),
                portal()
            ],
        })
    ]



});