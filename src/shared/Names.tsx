class Names {
  static generateRandomNamesAustralia() {
    const surnames = [
      'Oliver', 'Charlotte', 'Noah', 'Ava', 'William', 'Amelia', 'Jack', 'Mia', 'Thomas', 'Isla',
      'Lucas', 'Olivia', 'James', 'Harper', 'Ethan', 'Ella', 'Liam', 'Grace', 'Henry', 'Emily',
      'Alexander', 'Sophia', 'Samuel', 'Chloe', 'Benjamin', 'Lily', 'Max', 'Zoe', 'Leo', 'Maddison'
    ];
  
    const givenNames = [
      'Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White', 'Martin', 'Anderson',
      'Thompson', 'Nguyen', 'Thomas', 'Walker', 'Harris', 'Lee', 'Ryan', 'Robinson', 'Kelly', 'Davis',
      'Evans', 'King', 'Wright', 'Turner', 'Green', 'Edwards', 'Baker', 'Hill', 'Cooper', 'Moore'
    ];

    const randomSurnameIndex = Math.floor(Math.random() * surnames.length);
    const randomGivenNameIndex = Math.floor(Math.random() * givenNames.length);

    const randomSurname = surnames[randomSurnameIndex];
    const randomGivenName = givenNames[randomGivenNameIndex];

    const fullName = randomGivenName + " " + randomSurname;
    return fullName;
  }

 

  static generateRandomFullName = () => {
    const firstNames = [
      "Chung",
      "Hoi",
      "Ka",
      "Lai",
      "Man",
      "Pak",
      "Siu",
      "Wai",
      "Yan",
      "Yiu",
    ];
    const lastNames = [
      "Chan",
      "Cheung",
      "Ho",
      "Lau",
      "Lee",
      "Leung",
      "Ng",
      "Wong",
      "Yau",
      "Yu",
    ];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];


    const fullName =`${firstName} ${lastName}`
 

    return {fullName};
  };

  static generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
  
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      email += characters.charAt(randomIndex);
    }
  
    email += '@hotmail.com';
    return email;
  }

  static generateRandomSignal() {
    const texts = ["4G", "5G", "LTE"];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  }

  static generateRandomCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters.charAt(randomIndex);
    return randomCharacter;
  }
  static genereateRandomCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters.charAt(randomIndex);
    return randomCharacter;
  }

  static generateRandomName() {
    const firstNames = [
      "Chung",
      "Hoi",
      "Ka",
      "Lai",
      "Man",
      "Pak",
      "Siu",
      "Wai",
      "Yan",
      "Yiu",
    ];
    const lastNames = [
      "Chan",
      "Cheung",
      "Ho",
      "Lau",
      "Lee",
      "Leung",
      "Ng",
      "Wong",
      "Yau",
      "Yu",
    ];
    const thirdNames = [
      "Chow ",
      "Lam",
      "Luk",
      "Ma",
      "Ngai",
      "Poon",
      "Shek",
      "Sin",
      "So",
      "Tang",
    ];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const thirdName = lastNames[Math.floor(Math.random() * thirdNames.length)];

    const numAsterisks1 = Math.floor(Math.random() * 3) + 1; // Random number of asterisks (1 to 6)
    const numAsterisks2 = Math.floor(Math.random() * 5) + 1; // Random number of asterisks (1 to 4)
    const formattedName = `${firstName} ${lastName.charAt(0)}${"*".repeat(
      numAsterisks1
    )} ${thirdName.charAt(0)}${"*".repeat(numAsterisks2)}`;

    return formattedName;
  }

  static generateRandomNames() {
    const firstNames = ['Murray', 'David', 'Catherine', 'Samuel'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown'];
  
    const getRandomElement = (array) => {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    };
  
    const formatName = (name) => {
      const formattedName = name.split('').map((char, index) => {
        if (index === 0) {
          return char;
        }
        return '*';
      });
      return formattedName.join('');
    };
  
    const randomFirstName = getRandomElement(firstNames);
    const randomLastName = getRandomElement(lastNames);
    const formattedFirstName = formatName(randomFirstName);
    const formattedLastName = formatName(randomLastName);
  
    return `${formattedFirstName} ${formattedLastName}`;
  }

  static randomName(){ 
    const names = [
      'Samantha', 'Ethan', 'Chloe', 'Ryan', 'Emily', 'Joshua', 'Grace', 'Adrian', 'Isabella', 'Nathan',
      'Olivia', 'Lucas', 'Sophia', 'Daniel', 'Ava', 'Jack', 'Emma', 'Jayden', 'Mia', 'Matthew',
      'Leo', 'Vivian', 'Justin', 'Ella', 'Andrew', 'Lily', 'Aaron', 'Zoe', 'Alex', 'Charlotte',
      'Oscar', 'Sarah', 'Jason', 'Alice', 'Kevin', 'Hannah', 'Eric', 'Amelia', 'Tony', 'Natalie',
      'Brian', 'Catherine', 'Samuel', 'Evelyn', 'David', 'Victoria', 'Michael', 'Jasmine'
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    return randomName

  }
  
}

export default Names;
