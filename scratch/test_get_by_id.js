async function testGetNoteById() {
  try {
    // First, get all to find a valid ID
    const listRes = await fetch('http://localhost:5000/api/notes');
    const listData = await listRes.json();
    const id = listData.data[0]._id;

    console.log(`Testing with ID: ${id}`);
    const response = await fetch(`http://localhost:5000/api/notes/${id}`);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

    // Test invalid ID
    console.log(`Testing with invalid ID: 123`);
    const invRes = await fetch(`http://localhost:5000/api/notes/123`);
    const invData = await invRes.json();
    console.log(JSON.stringify(invData, null, 2));

    // Test non-existent ID
    const nonExistentId = '64b1f2c3e4d5a6b7c8d9e0f1';
    console.log(`Testing with non-existent ID: ${nonExistentId}`);
    const nonRes = await fetch(`http://localhost:5000/api/notes/${nonExistentId}`);
    const nonData = await nonRes.json();
    console.log(JSON.stringify(nonData, null, 2));

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

testGetNoteById();
