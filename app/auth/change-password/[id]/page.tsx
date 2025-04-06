"use client";
import { ChangePasswordForm } from "@/components/auth/changePasswordForm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChangePassword() {
  const { id } = useParams();
  const idNumber = Number(id) || 0;
  return (
    <div className="h-screen flex items-center justify-center">
      <ChangePasswordForm id={idNumber}></ChangePasswordForm>
    </div>
  );
}
