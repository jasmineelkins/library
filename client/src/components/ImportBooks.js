import React, { useState } from "react";

function ImportBooks(props) {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;
        csvFileToArray(csvOutput);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  function handleUpload(e) {
    e.preventDefault();

    // const formData = new FormData();

    // const upload_file = this.state.file;

    // formData.append("file", upload_file);

    // Adapter.uploadFile(this.state.type, formData).then((r) =>
    //   r.json.then(console.log)
    // );
  }

  return (
    <div className="importBooksContainer">
      <h3>Import Books</h3>

      <form onSubmit={(e) => handleUpload(e)} className="importBooksForm">
        <input
          type={"file"}
          accept={".csv"}
          id={"csvFileInput"}
          onChange={handleOnChange}
          //   value={this.state.file}
        />
        <button onClick={(e) => handleOnSubmit(e)}>IMPORT CSV</button>
      </form>

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImportBooks;
