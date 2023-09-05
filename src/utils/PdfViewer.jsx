

export default function PdfViewer() {
  return (
    <div className="w-full h-screen">
      <figure className="w-full h-full">
        <embed
          src="https://pdfobject.com/pdf/sample-3pp.pdf#page=3"
          className="embedSet"
          type="application/pdf"
          width={"100%"}
          height={"100%"}
        />
      </figure>
    </div>
  );
}
