import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Link,
  HStack,
  Grid,
  GridItem,
  Flex,
  theme,
} from '@chakra-ui/react';
import Mockup1 from './imgs/Mockup1.png';
import Android from './imgs/Download_on_the_App_Store_Badge.svg';
import Apple from './imgs/Google_Play_Store_badge_EN.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

function MobileView() {
  return (
    <Box my={4}>
      {/* The App itself */}
      <Text textAlign="start" opacity={'70%'} px={4}>
        {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Text>
      <Heading as="h1" size="2xl" textAlign="start" px={4} mb={8}>
        ReduStress
      </Heading>
      <Box
        bgGradient="linear-gradient(120deg, rgba(71,148,255,1) 0%, rgba(10,101,224,1) 100%)"
        borderRadius="xl"
        height={'200px'}
        p={4}
        mx={4}
        my={4}
      >
        <Text fontSize="2xl" fontWeight={'bold'} color="white">
          Breathing Exercises
        </Text>
        <Text fontSize="lg" color="white">
          4.5 rating
        </Text>
        <Text fontSize="lg" color="white">
          1 - 60 Minutes
        </Text>
        <br />
        <br />

        <Link color="white" fontSize="lg" href="/exercise">
          Go to exercise
        </Link>
      </Box>
      <Box
        bgGradient="linear-gradient(120deg, rgba(71,148,255,1) 0%, rgba(10,101,224,1) 100%)"
        borderRadius="xl"
        height={'200px'}
        p={4}
        mx={4}
        my={4}
      >
        <Text fontSize="2xl" fontWeight={'bold'} color="white">
          Meditation Timers
        </Text>
        <Text fontSize="lg" color="white">
          4.5 rating
        </Text>
        <Text fontSize="lg" color="white">
          1 - 60 Minutes
        </Text>
        <br />
        <br />

        <Link color="white" fontSize="lg" href="/exercise">
          Go to exercise
        </Link>
      </Box>
      <Box
        bgGradient="linear-gradient(120deg, rgba(71,148,255,1) 0%, rgba(10,101,224,1) 100%)"
        borderRadius="xl"
        height={'200px'}
        p={4}
        mx={4}
        my={4}
      >
        <Text fontSize="2xl" fontWeight={'bold'} color="white">
          Well-being Sessions
        </Text>
        <Text fontSize="lg" color="white">
          4.5 rating
        </Text>
        <Text fontSize="lg" color="white">
          1 - 60 Minutes
        </Text>
        <br />
        <br />

        <Link color="white" fontSize="lg" href="/exercise">
          Go to exercise
        </Link>
      </Box>
      <Box
        bgGradient="linear-gradient(120deg, rgba(71,148,255,1) 0%, rgba(10,101,224,1) 100%)"
        borderRadius="xl"
        height={'200px'}
        p={4}
        mx={4}
        my={4}
      >
        <Text fontSize="2xl" fontWeight={'bold'} color="white">
          Breathing Exercises
        </Text>
        <Text fontSize="lg" color="white">
          4.5 rating
        </Text>
        <Text fontSize="lg" color="white">
          1 - 60 Minutes
        </Text>
        <br />
        <br />

        <Link color="white" fontSize="lg" href="/exercise">
          Go to exercise
        </Link>
      </Box>
      {/* Mobile Tab bar with 3 tabs (Main, Account, Settings) */}
      <Flex
        bg="white"
        pos="fixed"
        bottom={0}
        left={0}
        right={0}
        height="80px"
        boxShadow="md"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={'70px'}
          height={'70px'}
          // borderRadius={'10%'}
          // set active tab to blue
          // bgGradient="linear-gradient(120deg, rgba(71,148,255,1) 0%, rgba(10,101,224,1) 100%)"
          textAlign={'center'}
          color={'#0A65E0'}
        >
          <Link href="/">
            {/* Home Icon */}
            <FontAwesomeIcon icon={faHouse} size="2x" />
            <Text fontSize="lg">Main</Text>
          </Link>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign={'center'}
        >
          <Link href="/account">
            {/* User Icon */}
            <FontAwesomeIcon icon={faUser} size="2x" />
            <Text fontSize="lg">Account</Text>
          </Link>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign={'center'}
        >
          <Link href="/settings">
            {/* Cog Icon */}
            <FontAwesomeIcon icon={faCog} size="2x" />
            <Text fontSize="lg">Settings</Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

function DesktopView() {
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        p={4}
        justifyContent="center"
        alignItems="center"
      >
        <GridItem
          display={'flex'}
          height={'100%'}
          justifyContent="center"
          alignItems="center"
        >
          <Flex justifyContent="center" alignItems="center" width={'55%'}>
            <img src={Mockup1} alt="ReduStress mockup" />
          </Flex>
        </GridItem>
        <GridItem
          colSpan={2}
          display={'flex'}
          height={'100%'}
          width={'100%'}
          alignItems="center"
        >
          <Box>
            <Heading my={4} as="h1" size="4xl" noOfLines={1}>
              Get{' '}
              <span
                style={{
                  color: '#0A65E0',
                  fontWeight: 'bold',
                }}
              >
                ReduStress
              </span>{' '}
              now!
            </Heading>
            <Text my={4} fontSize="xl" noOfLines={3}>
              ReduStress is a mobile app that helps you to reduce stress by
              providing you with a variety of tools and resources.
            </Text>
            <Text my={4} fontSize="xl" noOfLines={3}>
              Download it now and start your journey to a stress-free life!
            </Text>
            <HStack my={4} spacing={4} justifyContent="end">
              <Link href="https://play.google.com/store/apps/details?id=com.redustress">
                <img
                  width={'200px'}
                  src={Android}
                  alt="Download on Google Play"
                />
              </Link>
              <Link href="https://apps.apple.com/us/app/redustress/id1583337277">
                <img
                  width={'200px'}
                  src={Apple}
                  alt="Download on the App Store"
                />
              </Link>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      {window.innerWidth < 768 ? <MobileView /> : <DesktopView />}
    </ChakraProvider>
  );
}

export default App;
