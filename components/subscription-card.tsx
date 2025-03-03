import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Check } from 'lucide-react'

interface SubscriptionCardProps {
  title: string;
  price: string;
  features: string[];
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ title, price, features }) => {
  return (
    <Card className='w-full'>
        <CardHeader>
            <CardTitle className="text-xl md:text-3xl font-serif font-semibold text-[#D03900]">{title}</CardTitle>
            <CardDescription>{price}</CardDescription>
        </CardHeader>
        <CardContent>
            <ul className='flex flex-col gap-y-4'>
                {features.map((features, index) => (
                    <li className='flex flex-row items-center gap-x-2' key={index}>
                        <Check size={16} />
                        <p className='max-w-7/8'>{features}</p>
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
  );
};

export default SubscriptionCard;