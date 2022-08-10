import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { FAQ } from '../../types'

interface FAQSectionProps {
  items: FAQ[]
}

export const FAQSection = ({ items }: FAQSectionProps) => {
  return (
    <Box borderRadius="lg" w="full" p={4}>
      <Accordion>
        {items.map((item: any, i: number) => {
          return (
            <AccordionItem key={`faq_${i}`}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.a}</AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </Box>
  )
}
