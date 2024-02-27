import client from "@/src/apollo/client"
import Layout from "@/src/components/layout"
import { sentContactForm } from "@/src/lib/api"
import { GET_PAGE } from "@/src/queries/pages/get-page"
import { handleRedirectsAndReturnData } from "@/src/utils/slug"
import { Alert, Button, FormControl, FormErrorMessage, FormLabel, Grid, Heading, Input, Select, Text, Textarea, useToast } from "@chakra-ui/react"
import { RadioGroup } from "@headlessui/react"
import { useRouter } from "next/router"
import { useState } from "react"

const initValues = {
  name:'',
  lastName:'',
  dataNastere:'',
  email:'',
  telefon:'',
  subject:'Programare',
  message:'',
  tipProgramare:'Doresc Analiza numerologica (prezentare scrisa)',
}

const initState = {values:initValues}

export default function DorescAnalizaNumerologica({ data }){
  const [state,setState] = useState(initState)
  const [touched,setTouched] = useState({})



  const toast = useToast()


  const { values, isLoading, error } = state

  const onBlur = ({target}) => setTouched((prev)=>({
    ...prev,
    [target.name]:true
  }))

  const handleChange = ({target}) => setState((prev)=>({
    
    ...prev,
    values:{
      ...prev.values,
      [target?.name]:target?.value,
    }
  }))

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading:true
    }))

    try {
      await sentContactForm(values)
      setTouched({})
      setState(initState)
      toast({
        title:'Messajul a fost trimis.',
        status:'success',
        duration:2000,
        position:'top-right'
      })
    }catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading:false,
        error:error.message
      }))
    }

  }

  const router = useRouter()
  
  return(
    <Layout data={data}>
     
      
        <Heading as="h5" mb={2}>Doresc o programare</Heading>
        {error && (
          <Alert severity="error"className="mb-2">
            {error}
          </Alert>
        )}
        <Text  mb={1}>Completează formularul de mai jos și te voi contacta pentru a stabili împreună detaliile pentru întâlnirea noastră.</Text>
      
        <FormControl error={error} variant="standard">
        <label id="demo-error-radios">Cum iti pot fi de folos?</label>
          <Select
            name="tipProgramare"
            value={values.tipProgramare}
            onChange={handleChange}
          >
            
            <option  value="Sedinta de consultanta numerologica 1:1">Sedinta de consultanta numerologica 1:1</option>
            <option  value="Doresc Analiza numerologica (prezentare scrisa)">Doresc Analiza numerologica (prezentare scrisa)</option>
           
              {/* <Radio  name="tipProgramare"  value="Sedinta de consultanta numerologica 1:1">Sedinta de consultanta numerologica 1:1</Radio>
              <Radio name="tipProgramare" value="Doresc Analiza numerologica (prezentare scrisa)" >Doresc Analiza numerologica (prezentare scrisa)</Radio> */}
           
          </Select>
        </FormControl>
     
        <Grid   columns={16} spacing={2}>
          <Grid item xs={16} md={8} >
            <FormControl isRequired  isInvalid={touched.name && !values.name}>
              <FormLabel>Nume</FormLabel>
              <Input
                className={touched.name && !values.name ? 'mb-0 border-red-500' : null}
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
                errorBorderColor="red.300"
              />
              <FormErrorMessage className="text-red-500">Name ist required.</FormErrorMessage>
            </FormControl>
          </Grid>
          
          <Grid item xs={16} md={8}>
            <FormControl isRequired isInvalid={touched.lastName && !values.lastName}>
              <FormLabel>Prenume</FormLabel>
              <Input
                className={touched.lastName && !values.lastName ? 'mb-0 border-red-500' : null}
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={onBlur}
                errorBorderColor="red.300"
              />
              <FormErrorMessage className="text-red-500">Lastname ist required.</FormErrorMessage>
            </FormControl>
          </Grid>
        </Grid>

        <FormControl isRequired isInvalid={touched.dataNastere && !values.dataNastere}>
          <FormLabel>ZIUA - LUNA - ANUL nasterii</FormLabel>
          <Input
            className={touched.dataNastere && !values.dataNastere ? 'mb-0 border-red-500' : null}
            type="text"
            name="dataNastere"
            value={values.dataNastere}
            onChange={handleChange}
            onBlur={onBlur}
            errorBorderColor="red.300"
          />
          <FormErrorMessage className="text-red-500">Required.</FormErrorMessage>
        </FormControl>

        <FormControl className="hidden">
              <FormLabel>Subiect</FormLabel>
              <Input
              type="disabled"
                name="subject"
                value={initValues.subject}
                onChange={handleChange}
              />
            </FormControl>

        <FormControl isRequired mb={5} isInvalid={touched.email && !values.email}>
          <FormLabel>Email</FormLabel>
          <Input
            className={touched.email && !values.email ? 'mb-0 border-red-500' : null}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            errorBorderColor="red.300"
            onBlur={onBlur}
          />
          <FormErrorMessage className="text-red-500">Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired mb={5} isInvalid={touched.telefon && !values.telefon}>
          <FormLabel>Telefon</FormLabel>
          <Input
            className={touched.telefon && !values.telefon ? 'mb-0 border-red-500' : null}
            type="text"
            name="telefon"
            value={values.telefon}
            onChange={handleChange}
            errorBorderColor="red.300"
            onBlur={onBlur}
          />
          <FormErrorMessage className="text-red-500">Required</FormErrorMessage>
        </FormControl>

        <FormControl  mb={5}>
          <FormLabel>Mesajul tau (optional)</FormLabel>
          <Textarea
            type="text"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}  
          />
        </FormControl>

        <Button
          colorScheme={'yellow'}
          disabled={!values.name || !values.email || !values.lastName || !values.telefon || !values.dataNastere}
          onClick={onSubmit}
        >
          {isLoading ? 'Loading...' : 'Trimite Programarea'}
        </Button>
    
    </Layout>
  )
}

export async function getStaticProps( ) {

	const { data, errors } = await client.query( {
		query: GET_PAGE,
		variables: {
			uri: '/',
		},
	} );

	const defaultProps = {
		props: {
			data: data || {}
		},
		/**
		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
		 * if the data is changed, if it is changed then it will update the
		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
		 */
		revalidate: 1,
	};

	return handleRedirectsAndReturnData ( defaultProps, data, errors, 'page' );
}