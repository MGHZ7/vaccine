import { TransparentCard } from "@/components/layout/card/transparentCard";
import { FileInput } from "@/components/layout/form/fileInput";
import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";

export function CareerApplicationForm() {

    return <TransparentCard className="px-8 py-16">
        <form className="space-y-8">
            <fieldset>
                <h4 className="text-xs text-primary">* Required Fields</h4>

                <div className="grid gap-4 md:grid-cols-2 mt-2">
                    <input placeholder="Location*" />
                    <input placeholder="Designation*" />
                    <input className="col-span-full" placeholder="Department*" />
                </div>
            </fieldset>

            <fieldset>
                <h4 className="text-lg font-bold text-primary">Applicant Info</h4>

                <div className="grid gap-4 md:grid-cols-2 mt-2">
                    <input placeholder="Country" />
                    <input placeholder="State" />
                    <textarea className="col-span-full" rows={5} placeholder="Address*" />
                </div>
            </fieldset>

            <fieldset>
                <h4 className="text-lg font-bold text-primary">Upload CV</h4>

                <h6 className="font-normal text-on-primary mt-6 mb-2">PDF or DOC files only</h6>
                <FileInput label="Choose File" fileInputProps={{}} />
            </fieldset>

            <fieldset>
                <label className="flex gap-2 items-center">
                    <input type="checkbox" />
                    I have read and accepted the Terms and Conditions and Privacy Policy
                </label>
            </fieldset>

            <div className="mt-4">
                <VaccineButtonLink className="block w-full text-center" buttonType="light" size="xl" href={''}>
                    Submit
                </VaccineButtonLink>
            </div>
        </form>
    </TransparentCard>
}