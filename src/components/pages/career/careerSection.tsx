'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { CareerImageSection } from "./careerImage";
import { CareerDto } from "@/core/dto/career";
import { CareerCard } from "./careerCard";

export function CareerSection() {
    return <section
        id="career">
        <ElementVisibilityChecker ComponentToShow={CareerImageSection} props={{}} />
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
            {careers.map((career, i) => <ElementVisibilityChecker key={i} ComponentToShow={CareerCard} props={{
                career
            }} />)}
        </div>
    </section>
}

const careers: CareerDto[] = [{
    title: 'Creative Art Designer',
    location: 'Showroom 43, Sunderland Ave, VIC, Ashburton - 3147, Australia',
    department: 'UI/UX Designer',
    position: 'Manager'
},
{
    title: 'Creative Art Designer',
    location: 'Showroom 43, Sunderland Ave, VIC, Ashburton - 3147, Australia',
    department: 'UI/UX Designer',
    position: 'Manager'
},
{
    title: 'Creative Art Designer',
    location: 'Showroom 43, Sunderland Ave, VIC, Ashburton - 3147, Australia',
    department: 'UI/UX Designer',
    position: 'Manager'
},
{
    title: 'Creative Art Designer',
    location: 'Showroom 43, Sunderland Ave, VIC, Ashburton - 3147, Australia',
    department: 'UI/UX Designer',
    position: 'Manager'
},
{
    title: 'Creative Art Designer',
    location: 'Showroom 43, Sunderland Ave, VIC, Ashburton - 3147, Australia',
    department: 'UI/UX Designer',
    position: 'Manager'
},
{
    title: 'Creative Art Designer',
    location: 'Showroom 43, Sunderland Ave, VIC, Ashburton - 3147, Australia',
    department: 'UI/UX Designer',
    position: 'Manager'
},
{
    title: 'Creative Art Designer',
    location: 'Showroom 43, Sunderland Ave, VIC, Ashburton - 3147, Australia',
    department: 'UI/UX Designer',
    position: 'Manager'
},
{
    title: 'Creative Art Designer',
    location: 'Showroom 43, Sunderland Ave, VIC, Ashburton - 3147, Australia',
    department: 'UI/UX Designer',
    position: 'Manager'
}]