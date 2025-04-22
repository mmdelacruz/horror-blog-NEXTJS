import { Container, Text, Title } from '@mantine/core'

export const metadata = {
  title: 'Scary Aisle - Terms & Conditions',
  description: 'Find relevant information about the terms and conditions on regards of our website, Scary Aisle. A place where you can read horror stories to read at night',
  keywords: 't&c, terms and conditions, terms, scary, stories, night, scary stories to read at night',
  alternates: {
    canonical: 'https://www.scaryaisle.com/terms-and-conditions/',
  },
};

const TermsAndConditions = () => {
  return (
    <>
    <Container>
                <Title p={50} fw={600} fz={35} ta={"center"}>Terms and Conditions</Title>

                <Text fw={600} fz={20} ta={"start"}>1. Acceptance of Terms</Text>
                <Text fz={16} ta={"start"}>By accessing and using www.scaryaisle.com, you accept and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use our website.</Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>2. Changes to Terms</Text>
                <Text fz={16} ta={"start"}>We reserve the right to modify these terms at any time. We will notify you of changes by posting the new terms on our website. Your continued use of the website after such changes constitutes your acceptance of the new terms.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>3. Content</Text>
                <Text fz={16} ta={"start"}>The content on Scary Aisle, including horror stories, images, and links, is provided for entertainment purposes only. We do not guarantee the accuracy, completeness, or usefulness of any content.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>4. Age Restriction</Text>
                <Text fz={16} ta={"start"}>Our website is intended for users who are 18 years or older. By using this website, you affirm that you are at least 18 years of age.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>5. Intellectual Property</Text>
                <Text fz={16} ta={"start"}>All content on this website, including text, and videos, is the property of Scary Aisle and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or otherwise use any content without our prior written permission.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>6. Monetization</Text>
                <Text fz={16} ta={"start"}>We may run advertisements on our website. These ads do not constitute an endorsement by Scary Aisle. We are not responsible for the content or accuracy of any advertisements.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>7. Limitation of Liability</Text>
                <Text fz={16} ta={"start"}>Scary Aisle will not be liable for any damages arising from the use or inability to use our website. This includes, but is not limited to, direct, indirect, incidental, punitive, and consequential damages.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>8. Contact Information</Text>
                <Text fz={16} ta={"start"}>If you have any questions about these terms and conditions, please contact us at contact@scaryaisle.com
                </Text>
    </Container>
    </>
  )
}

export default TermsAndConditions