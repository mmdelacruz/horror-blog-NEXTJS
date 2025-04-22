import { Container, Text, Title } from '@mantine/core'


export const metadata = {
    title: 'Scary Aisle - Privacy Policy',
    description: 'Find relevant information about the privacy policy on regards of our website, Scary Aisle. A place where you can read horror stories to read at night',
    keywords: 'privacy, privacy policy, policy, scary, stories, night, scary stories to read at night',
    alternates: {
        canonical: 'https://www.scaryaisle.com/privacy-policy/',
      },
  };

const PrivacyPolicy = () => {
    return (
        <>
        
            <Container>
                <Title p={50} fw={600} fz={35} ta={"center"}>Privacy Policy</Title>

                <Text fw={600} fz={20} ta={"start"}>1. Introduction</Text>
                <Text fz={16} ta={"start"}>Scary Aisle (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit www.scaryaisle.com.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>2. Information We Collect</Text>
                <Text fz={16} ta={"start"}>We do not knowingly collect personal information from users. However, we use third-party services like Google Analytics and Google AdSense, which may collect information about your usage of our website.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>3. Google Analytics</Text>
                <Text fz={16} ta={"start"}>We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as your IP address, browser type, and pages visited. This information is used to analyze website traffic and improve our content.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>4. Google AdSense</Text>
                <Text fz={16} ta={"start"}>We use Google AdSense to display ads on our website. Google AdSense may use cookies to serve ads based on your prior visits to our site or other sites on the internet. You can opt-out of personalized advertising by visiting Google&apos;s Ads Settings.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>5. Email Contact</Text>
                <Text fz={16} ta={"start"}>If you choose to contact us via email, we will collect your email address and any other information you provide in your email. This information will be used solely to respond to your inquiries.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>6. Data Security</Text>
                <Text fz={16} ta={"start"}>We take reasonable measures to protect the information we collect from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee the security of your information.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>7. Third-Party Links</Text>
                <Text fz={16} ta={"start"}>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>8. Children&apos;s Privacy</Text>
                <Text fz={16} ta={"start"}>Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently received personal information from a user under the age of 18, we will delete such information from our records.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>9. Changes to This Privacy Policy</Text>
                <Text fz={16} ta={"start"}>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of the website after such changes constitutes your acceptance of the new Privacy Policy.
                </Text>

                <Text mt={30} fw={600} fz={20} ta={"start"}>10. Contact Us</Text>
                <Text fz={16} ta={"start"}>If you have any questions about this Privacy Policy, please contact us at contact@scaryaisle.com
                </Text>

            </Container>
        </>
    )
}

export default PrivacyPolicy