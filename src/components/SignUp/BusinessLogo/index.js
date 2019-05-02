import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";

import Progress from "../ProgressBar";
import addIcon from "../../../assets/add.svg";
import {
  DropContainer,
  DropInstructions,
  AddIcon,
  AdditionalInstructions,
  SkipOption
} from "./styles";
import {
  Headline,
  SubHeadline,
  Instructions,
  NextButton
} from "../SignUpContainer/styles";

import { uploadFileToS3 } from "../../../actions/businessActions";
import { withFirebase } from "../../../Firebase";

function BusinessLogo(props) {
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file read was aborted");
    reader.onerror = () => console.log("file read errored out");
    reader.onload = e => {
      setImage(reader.result);
    };
    acceptedFiles.forEach(file => {
      reader.readAsDataURL(file);
      setFile(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const submitImage = () => {
    props.uploadFileToS3(file, props.next);
  };

  return (
    <>
      <Headline>CREATE BUSINESS</Headline>
      <Progress progress={"80%"} />
      <SubHeadline>Business Logo</SubHeadline>
      <Instructions>
        Upload your business's logo. Brand your page and make it your own.
      </Instructions>
      <DropContainer {...getRootProps()} background={image}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : image ? null : (
          <DropInstructions>
            <AddIcon src={addIcon} alt="Click to add your logo" />
            <p>Click to Add File</p>
          </DropInstructions>
        )}
      </DropContainer>
      {image ? (
        <AdditionalInstructions>
          Click on image above, or drop new file to change.
        </AdditionalInstructions>
      ) : (
        <AdditionalInstructions />
      )}
      <NextButton disabled={image.length === 0} onClick={submitImage}>
        SUBMIT AND FINISH
      </NextButton>
      <SkipOption onClick={props.next}>SKIP FOR NOW >></SkipOption>
    </>
  );
}

export default connect(
  null,
  { uploadFileToS3 }
)(withFirebase(BusinessLogo));
