async function testCreateNote() {
  try {
    const response = await fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: "Test Note",
        content: "This is a test content",
        category: "work"
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

testCreateNote();
