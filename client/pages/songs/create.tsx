import { FC, useState } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../layouts/StepWrapper';
import FileUpload from '../../components/FileUpload';

const Create: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1);
    }
  };

  const back = () => {
    setActiveStep(prev => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {
          activeStep === 0 &&
          (
            <Grid container direction='column' alignItems="center" style={{ padding: 20 }}>
              <TextField
                style={{ marginTop: 10 }}
                label='Title'
              />
              <TextField
                style={{ marginTop: 10 }}
                label='Author'
              />
              <TextField
                style={{ marginTop: 10 }}
                label='Lyrics'
                multiline
                rows={3}
              />
            </Grid>
          )
        }
        {
          activeStep === 1 &&
          <FileUpload accept='image/*' setFile={setPicture}>
            <Button>Upload cover</Button>
          </FileUpload>
        }
        {
          activeStep === 2 &&
          <FileUpload accept='audio/*' setFile={setAudio}>
            <Button>Upload song</Button>
          </FileUpload>
        }

      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={back}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;