import { PatientForm } from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt={""}
            width={1000}
            height={1000}
            className="w-fit mb-12 h-10"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 justify-between flex">
            <p className=" justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePluse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        alt=""
        height={1000}
        width={1000}
        className="side-img max-w-[50%] h-[!00%]"
      />
    </main>
  );
}
