import API from "~/lib/axios";

export const makeEditable = (rootElement: HTMLElement) => {
  const elementsToMakeEditable = rootElement.querySelectorAll(
    "[data-editable], .editable"
  );

  elementsToMakeEditable.forEach((element) => {
    element.setAttribute("contentEditable", "true");
    element.setAttribute("suppressContentEditableWarning", "true");

    element.addEventListener("blur", async () => {
      const updatedContent = element.innerHTML;
      const key = element.id || element.getAttribute("data-key")!;

      // Send the updated content to the server
      try {
        const { data: page } = await API.get("/api/pages/1");

        const resp = await API.patch("/api/pages/1", {
          data: {
            ...page?.data,
            [key]: updatedContent,
          },
        });

        console.log(resp);
        console.log("Content updated successfully");
      } catch (error) {
        console.error("Error updating content:", error);
      }
    });
  });
};
