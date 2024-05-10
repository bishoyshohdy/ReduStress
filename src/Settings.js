// Settings page is a simple page that displays some simple settings such as font size and colors for the app
// also, it allows the user to log out of the app

import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Select,
  Flex,
  ChakraProvider,
  theme,
  Link,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

function Settings() {
  return (
    <ChakraProvider theme={theme}>
      <Heading my={4} mx={4} as="h1" size="3xl">
        Settings
      </Heading>
      <Box
        my={7}
        display="flex"
        width={'100%'}
        height={'100%'}
        alignItems="center"
        justifyContent="center"
        textAlign={'center'}
      >
        <Flex
          flexDirection="column"
          width={'90%'}
          justifyContent="space-between"
        >
          <Box
            bg="white"
            py={1}
            width={'100%'}
            borderRadius={'10px'}
            border={'1px solid '}
            boxShadow="md"
            my={2}
            justifyContent={'space-between'}
          >
            <Text fontSize="xl" my={2}>
              Font Size:
              <br />
              <Slider
                width={'70%'}
                my={3}
                aria-label="slider-ex-1"
                defaultValue={14}
                min={10}
                max={18}
                step={4}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                <SliderMark value={10}>10</SliderMark>
                <SliderMark value={14}>14</SliderMark>
                <SliderMark value={18}>18</SliderMark>
              </Slider>
            </Text>
          </Box>
          <Box
            bg="white"
            py={1}
            width={'100%'}
            borderRadius={'10px'}
            border={'1px solid '}
            boxShadow="md"
            my={2}
          >
            <Text fontSize="xl" my={2}>
              Color Scheme: <Switch size="lg" />
            </Text>
          </Box>
          <Box
            bg="white"
            py={1}
            width={'100%'}
            borderRadius={'10px'}
            border={'1px solid '}
            boxShadow="md"
            my={2}
          >
            <Text fontSize="xl" my={2}>
              Sound Effects: <Switch size="lg" />
            </Text>
          </Box>
          <Box
            bg="white"
            py={1}
            width={'100%'}
            borderRadius={'10px'}
            border={'1px solid '}
            boxShadow="md"
            my={2}
            px={5}
          >
            <Text fontSize="xl" my={2}>
              Notifications: <Switch size="lg" />
            </Text>
          </Box>
          <Box
            bg="white"
            py={1}
            width={'100%'}
            borderRadius={'10px'}
            border={'1px solid '}
            boxShadow="md"
            my={2}
            px={5}
          >
            <Text fontSize="xl" my={2}>
              Language:{' '}
              <Select placeholder="Select language">
                <option>English</option>
                <option>Arabic</option>
                <option>French</option>
                <option>Spanish</option>
              </Select>
            </Text>
          </Box>
          <Box
            bg="white"
            py={1}
            width={'100%'}
            borderRadius={'10px'}
            border={'1px solid '}
            boxShadow="md"
            my={2}
          >
            <Text fontSize="xl" my={2}>
              Theme:{' '}
              <Select placeholder="Select theme">
                <option>Light</option>
                <option>Dark</option>
              </Select>
            </Text>
          </Box>
          <Box
            bg="white"
            py={1}
            width={'100%'}
            borderRadius={'10px'}
            border={'1px solid '}
            boxShadow="md"
            my={2}
          >
            <Text fontSize="xl" my={2}>
              Font:{' '}
              <Select placeholder="Select font">
                <option>Arial</option>
                <option>Times New Roman</option>
                <option>Verdana</option>
                <option>Comic Sans MS</option>
              </Select>
            </Text>
          </Box>

          <Button
            bg="blue.500"
            color="white"
            mb={16}
            onClick={() => {
              alert('Logged Out');
            }}
          >
            Log Out
          </Button>
        </Flex>

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
            textAlign={'center'}
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
            color={'#0A65E0'}
            textAlign={'center'}
            href="/settings"
          >
            <Link href="/settings">
              {/* Cog Icon */}
              <FontAwesomeIcon icon={faCog} size="2x" />
              <Text fontSize="lg">Settings</Text>
            </Link>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Settings;
