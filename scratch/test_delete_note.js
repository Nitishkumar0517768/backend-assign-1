async function testDeleteNote() {
  try {
    const listRes = await fetch('http://localhost:5000/api/notes');
    const listData = await listRes.json();
    const id = listData.data[0]._id;

    console.log(`Testing deletion for ID: ${id}`);
    const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

    // Test non-existent ID
    console.log(`Testing with non-existent ID: ${id}`);
    const nonRes = await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'DELETE'
    });
    const nonData = await nonRes.json();
    console.log(JSON.stringify(nonData, null, 2));

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

testDeleteNote();
