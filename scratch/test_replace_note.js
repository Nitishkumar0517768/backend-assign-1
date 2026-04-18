async function testReplaceNote() {
  try {
    const listRes = await fetch('http://localhost:5000/api/notes');
    const listData = await listRes.json();
    const id = listData.data[0]._id;

    console.log(`Testing replacement for ID: ${id}`);
    const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: "Completely new title",
        content: "Completely new content",
        category: "personal",
        isPinned: false
      })
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

    // Test missing fields
    console.log(`Testing with missing title:`);
    const missRes = await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: "No title here"
      })
    });
    const missData = await missRes.json();
    console.log(JSON.stringify(missData, null, 2));

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

testReplaceNote();
