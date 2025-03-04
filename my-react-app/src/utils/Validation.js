// Vérifie si le nom est valide (lettres, espaces, apostrophes et tirets)
export const isValidName = (name) => {
    const regex = /^[a-zA-ZÀ-ÿ]+(?:[-' ][a-zA-ZÀ-ÿ]+)*$/;
    return regex.test(name);
};

// Vérifie si l'email est valide
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Vérifie si le mot de passe est valide (min. 6 caractères, au moins une lettre, un chiffre)
export const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
};
