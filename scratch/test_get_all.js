async function testGetAllNotes() {
  try {
    const response = await fetch('http://localhost:5000/api/notes');
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

testGetAllNotes();
