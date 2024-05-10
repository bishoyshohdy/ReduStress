import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  ChakraProvider,
  theme,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  IconButton,
  Icon,
  Link,
} from '@chakra-ui/react';
import {
  MdGraphicEq,
  MdPlayArrow,
  MdPause,
  MdAccountCircle,
  MdVolumeDown,
  MdVolumeUp,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

function Exercise() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(60); // Initial duration in seconds
  const [seconds, setSeconds] = useState(duration);
  const [volume, setVolume] = useState(50); // Initial volume level

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Timer functionality
  useEffect(() => {
    let interval = null;
    if (isPlaying && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, seconds]);

  // Function to handle duration change
  const handleDurationChange = value => {
    setDuration(value);
    setSeconds(value);
  };

  return (
    <ChakraProvider theme={theme} mx={3}>
      <Heading as="h1" size="2xl" mt={5} textAlign="center">
        Breathing Exercise
      </Heading>
      <Flex
        direction="column"
        height="50vh" // Adjusted height to take full screen
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
      >
        <Box>
          <Box
            borderRadius="full"
            bgGradient="linear(to-r, blue.400, blue.600)"
            p={8}
            mt={8}
            mx={4}
            textAlign="center"
            maxW="100%"
            color={'white'}
          >
            <Text fontSize="xl">
              This is a breathing exercise. Click the button below to start.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box mx={3}>
        {/* Timer Slider */}
        <Flex alignItems="center" justifyContent="center" mt={4}>
          <Box as={MdAccountCircle} mx={2} />
          <Slider
            aria-label="slider-ex-1"
            defaultValue={duration}
            onChange={value => handleDurationChange(value)}
            min={1}
            max={300} // Max duration in seconds
            width="100%"
          >
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg="#3182ce" />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="blue" as={MdGraphicEq} />
            </SliderThumb>
          </Slider>
        </Flex>

        {/* Player controls */}
        <Flex justifyContent="center" alignItems="center" mt={4}>
          <IconButton
            colorScheme="blue"
            variant="solid"
            mx={2}
            icon={<MdChevronLeft />}
            fontSize={24}
          />

          <Button
            colorScheme="blue"
            variant="solid"
            mx={2}
            onClick={togglePlay}
            fontSize={24}
          >
            <Box as={isPlaying ? MdPause : MdPlayArrow} />
          </Button>
          <IconButton
            colorScheme="blue"
            variant="solid"
            mx={2}
            icon={<MdChevronRight />}
            fontSize={24}
          />
        </Flex>

        {/* Volume Slider */}
        <Flex alignItems="center" justifyContent="center" mt={4}>
          <Box as={MdVolumeDown} mx={2} />
          <Slider
            aria-label="slider-ex-2"
            defaultValue={volume}
            onChange={value => setVolume(value)}
            min={0}
            max={100}
            width="100%"
          >
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg="#3182ce" />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="blue" as={MdGraphicEq} />
            </SliderThumb>
          </Slider>
          <Box as={MdVolumeUp} mx={2} />
        </Flex>
      </Box>
      <Text fontSize="xl" my={4} textAlign="center">
        Time remaining: {seconds} seconds
      </Text>

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
          textAlign={'center'}
        >
          <Link href="/settings">
            {/* Cog Icon */}
            <FontAwesomeIcon icon={faCog} size="2x" />
            <Text fontSize="lg">Settings</Text>
          </Link>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Exercise;
