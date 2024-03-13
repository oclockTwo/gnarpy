import {useTranslations} from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

export default function Faq() {
  const t = useTranslations('FAQPage');
  return (
    <Accordion type="single" collapsible>
      {faqID.map((key) => (
        <AccordionItem value={`item-${key}`} key={key}>
          <AccordionTrigger className="text-lg font-bold">
            {t(`q${key}`)}
          </AccordionTrigger>
          <AccordionContent>{t(`a${key}`)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
