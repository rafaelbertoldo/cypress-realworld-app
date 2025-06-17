class MyInfoPage {
  selectorsList() {
    const selectors = {
      signUpButton: "[href='/signup']",
      firstName: "[name='firstName']",
      lastName: "[name='lastName']",
      username: "[name='username']",
      password: "[name='password']",
      confirmPassword: "[name='confirmPassword']",
      submitButton: "[type='submit']",
      dialogBox: "[role='dialog']",
      closeDialogButton: "[type='button']",
      requiredFieldAlert: "#username-helper-text",
    };

    return selectors;
  }
}

export default MyInfoPage;
