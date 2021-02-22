const loginContent = {
    ForgotUrPassword: true,
    modalLink: {
        title: "Don't have an account?",
        linkTitle: "Sign up now",
        link: "/?__method=signup",
        method: "login",
        reverseMethod: "signup",
        forgotPassword: true
    }
}

const signupContent = {
    modalLink: {
        title: "Already have an Account?",
        linkTitle: "Login now",
        link: "/?__method=login",
        method: "signup",
        reverseMethod: "login",
        forgotPassword: false
    }
}

export default (page) => {
    switch (page) {
        case "login":
            return loginContent;
        case "signup":
            return signupContent;
    }
}