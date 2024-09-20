import { Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

const GoogleWrapper = styled(Flex)`
  background-color: white;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black !important;
    font-width: bold !important;
  }
`;

const axiosApiCall = (url, method, body = {}) =>
  axios({
    method,
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
    data: body,
  });

const Index = () => {
  const router = useRouter();

  const onSuccess = (response) => {
    const access_token = response.accessToken;
    axiosApiCall("/auth/google", "post", { access_token }).then((res) => {
      const { user, token } = res.data;
      Cookie.set("token", token);
      router.push("/");
    });
  };

  const onFailure = (error) => {
    console.log("Login failed: ", error);
  };

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      bg="green.900"
      height="100vh"
    >
      <Heading maxW="800px" textAlign="center" color="white">
        Google Oauth in Next.js, Node.js and Express.js
      </Heading>
      <GoogleWrapper width="300px" mt="3rem">
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          buttonText="Signup with google."
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </GoogleWrapper>
    </Flex>
  );
};

export default Index;
