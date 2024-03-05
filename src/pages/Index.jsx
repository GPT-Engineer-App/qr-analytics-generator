import { Box, Button, Container, Heading, Input, Stack, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaQrcode } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const toast = useToast();

  const generateQRCode = () => {
    // Normally, you would send the URL to a backend service to generate the QR code and get a URL for the QR code image
    // For demonstration, we use a public QR code API - NOTE: In a real-world scenario, use your own backend service to generate QR codes
    const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
    setQrCode(qrCodeImageUrl);

    // Here you would also send a request to your backend to log this generation event
    toast({
      title: "QR Code Generated!",
      description: "Your QR code has been successfully generated.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container py={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          QR Code Generator
        </Heading>
        <Text>Enter a URL and click Generate to create a QR Code.</Text>
        <Input placeholder="Enter URL here" value={url} onChange={(e) => setUrl(e.target.value)} />
        <Button leftIcon={<FaQrcode />} colorScheme="teal" onClick={generateQRCode} isDisabled={!url}>
          Generate
        </Button>
        {qrCode && (
          <Box>
            <Image src={qrCode} alt="Generated QR Code" />
            <Text>QR Code for: {url}</Text>
          </Box>
        )}

        {/* Placeholder for statistics - in a real application, these would be fetched from a backend */}
        <Box mt={10}>
          <Heading as="h2" size="md">
            QR Code Statistics (Placeholder)
          </Heading>
          <Text>Number of Scans: 0</Text>
          <Text>Last Scanned: Never</Text>
          {/* More statistics could be listed here */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
