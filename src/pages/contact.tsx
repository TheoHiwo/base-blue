// import { Box, Container } from "@chakra-ui/react";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";

const ContactPage = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values, actions) => {
    setIsLoading(true);
    // Your submit logic here, e.g. send form data to server
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      actions.resetForm();
    }, 2000);
  };

  return (
    <Container maxWidth={["95%", "95%", "70%", "60%", "50%"]}>
      <Flex my="20" w='100%' direction={'column'}>
        <Heading as="span" fontSize="52" alignSelf="center">
          Get in touch
        </Heading>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <FormControl mb="4" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                />
              </FormControl>

              <FormControl mb="4" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Your email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
              </FormControl>

              <FormControl mb="4" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Your message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  name="message"
                />
              </FormControl>

              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isLoading}
                type="submit"
                disabled={!formik.isValid || isLoading}
              >
                Send
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Container>
  );
};

export default ContactPage;
