"use server";
import { signIn } from "../../../auth";
export default async function credentialLogin(form) {
  try {
    await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
  } catch (error) {
    console.log(error.message);
  }
}
