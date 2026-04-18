async function testBulkDelete() {
  try {
    const listRes = await fetch('http://localhost:5000/api/notes');
    const listData = await listRes.json();
    const ids = listData.data.slice(0, 2).map(n => n._id);

    console.log(`Testing bulk deletion for IDs: ${ids.join(', ')}`);
    const response = await fetch('http://localhost:5000/api/notes/bulk', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids })
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

testBulkDelete();
