async function testUpdateNote() {
  try {
    const listRes = await fetch('http://localhost:5000/api/notes');
    const listData = await listRes.json();
    const id = listData.data[0]._id;

    console.log(`Testing update for ID: ${id}`);
    const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isPinned: true
      })
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

    // Test empty body
    console.log(`Testing with empty body:`);
    const empRes = await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    const empData = await empRes.json();
    console.log(JSON.stringify(empData, null, 2));

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

testUpdateNote();
