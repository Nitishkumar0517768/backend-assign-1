async function testBulkCreate() {
  try {
    const response = await fetch('http://localhost:5000/api/notes/bulk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        notes: [
          { title: "Bulk 1", content: "Content 1", category: "work" },
          { title: "Bulk 2", content: "Content 2", category: "study" },
          { title: "Bulk 3", content: "Content 3", category: "personal" }
        ]
      })
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

testBulkCreate();
