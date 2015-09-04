var components = React.render(
    <FormBuilder validate={true} debug={true} debugName="tester">
        <TextInput name="username" showError={false} required={true}>Username:</TextInput>
        <TextInput name="surname" required={true}>Surname:</TextInput>
        <TextInput name="forename" required={true}>Forename:</TextInput>
        <TextInput name="email" inline={true} validate="email">Email:</TextInput>
        <RadioGroup name="referrer" title="How did you hear about us?" other={true} required={true}>
            <RadioButton value="newspaper">Newspaper</RadioButton>
            <RadioButton value="tv">Television</RadioButton>
            <RadioButton value="social">Social networking</RadioButton>
            <RadioButton value="google">Google addwords</RadioButton>
            <RadioButton value="mobile">Mobile advertising</RadioButton>
        </RadioGroup>
    </FormBuilder>,
    document.getElementById("reactComponents")
);
