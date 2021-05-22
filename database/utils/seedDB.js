const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
    address : "68th Street Lexington Avenue",
    imageUrl : "https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-600w-193292036.jpg"
	});
  
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
    address : "123 East 5th Street",
		description: "This is a school in MA.",
    imageUrl : "https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-600w-193292036.jpg"
	});

	const dummy_student = await Student.create({
      firstname: "Joe",
      lastname: "Shmo",
      imageUrl : "https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-600w-193292036.jpg",
      email : "testemail@gmail.com",
      gpa : 4.0
  });

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;