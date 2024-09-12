'use client';

import { useEffect } from "react";

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { CareerApplicationForm } from "@/components/pages/career/applyNow/careerApplicationForm";

import Image from "next/image";
import vickyImage from "../../assets/vicky/vicky-faqs.png";
import { FAQQuestions } from "@/components/pages/help/faq/faqQuestion";


export default function FAQsPage() {

    useEffect(() => {
        document.body.classList.add('bg-help');

        return () => {
            document.body.classList.remove('bg-help');
        }
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between 
            px-8 md:px-24 py-28 space-y-24 overflow-x-hidden">
            <h1 className="text-3xl font-bold text-on-primary self-start lg:px-[40%]">FAQs</h1>

            <section className="grid lg:grid-cols-2">
                <Image alt="Vicky FAQs" {...vickyImage} />

                <div className="space-y-4">
                    {faqs.map(faq => <FAQQuestions
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer} />)}
                </div>

            </section>
        </main>
    );
}

const faqs = [
    {
        question: "How can I buy VAC token?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "Which wallet should I use to store Liberta tokens?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "What is the gas limit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "Can I participate in the ICO without creating an Ethereum address?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "What happens if I sent funds or cryptocurrency after the Token sale has ended?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "Can I participate in the ICO without creating an Ethereum address?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "When will I receive my Vaccine tokens?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "What is the minimum investment?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "Will any additional VACCINE tokens will be issued in the future?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "Which citizen cannot participate in the Vaccine Token Sales?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "Can I resell the Liberta token?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "What is the legal structure of Liberta project?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    },
    {
        question: "What are the guarantees that everything that you declare in the whitepaper will be implemented?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla."
    }
]