// Page that displays the account information of the user
// such as their name, email, date of birth, age, region, registration date, and last login date.
// Gives them the option to edit their account information.
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
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

function Account() {
  return (
    <ChakraProvider theme={theme}>
      <Heading my={4} mx={4} as="h1" size="3xl" noOfLines={1}>
        Account
      </Heading>
      <Box
        my={4}
        display="flex"
        width={'100%'}
        height={'100%'}
        alignItems="center"
        justifyContent="center"
        textAlign={'center'}
      >
        <Flex flexDirection="column">
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
              Name: John Doe
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
              Email: johndoe@xyz.com
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
              Date of Birth: 01/01/2000
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
              Age:24
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
              Country of Residence: Egpyt
            </Text>
          </Box>
          <Box
            bg="white"
            p={1}
            width={'100%'}
            borderRadius={'10px'}
            border={'1px solid '}
            boxShadow="md"
            my={2}
          >
            <Text fontSize="xl" my={2}>
              Registration Date: 01/01/2021
            </Text>
          </Box>
          <Box
            bg="white"
            p={1}
            width={'100%'}
            borderRadius={'10px'}
            border={'1px solid '}
            boxShadow="md"
            my={2}
          >
            <Text fontSize="xl" my={2}>
              Last Login Date: 01/01/2021
            </Text>
          </Box>
          <Box
            width={'100%'}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            textAlign={'center'}
          >
            <Button me={2} colorScheme="blue" width={'150px'} size="lg">
              Edit Account
            </Button>
            <Button colorScheme="red" width={'150px'} size="lg">
              Delete Account
            </Button>
          </Box>
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
            color={'#0A65E0'}
            textAlign={'center'}
          >
            <Link>
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

export default Account;
