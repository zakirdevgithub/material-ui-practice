import React from "react";
import {Container, Box, Typography} from "@material-ui/core";


const ContainerCom=()=>{
    return(
        <React.Fragment>
        <Container>
        <Box textAlign="center" boxShadow={3}>
        <Typography variant="h1">
         Container default
        </Typography>
        <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release
      of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
        </Typography>
        </Box>
        </Container>

        <Container maxWidth="lg"> {/* lg = default */}
        <Box textAlign="center" boxShadow={3}>
        <Typography variant="h1">
        Container lg(default)
        </Typography>
        <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release
      of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
        </Typography>
        </Box>
        </Container>

        <Container maxWidth="md"> 
        <Box textAlign="center" boxShadow={3}>
        <Typography variant="h1">
        Container md
        </Typography>
        <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release
      of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
        </Typography>
        </Box>
        </Container>

        <Container maxWidth="sm"> 
        <Box textAlign="center" boxShadow={3}>
        <Typography variant="h1">
        Container sm
        </Typography>
        <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release
      of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
        </Typography>
        </Box>
        </Container>
        </React.Fragment>
    )
}

export default ContainerCom;