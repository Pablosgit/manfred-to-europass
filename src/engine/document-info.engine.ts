import * as model from "models/europass";
import { RootInfo } from "./engine.model";
import { rootNodeNames } from "./nodes.const";

export const generateDocumentInfoElement = (
  rootInfo: RootInfo
): HTMLElement => {
  const documentInfoElement = rootInfo.document.createElement(
    rootNodeNames.DocumentInfo
  );

  // TODO: Go Felix Go
  // const documentTypeElement = generateDocumentType(document);
  // rootNodeNames.DocumentInfo.appendChild(documentTypeElement);

  return documentInfoElement;
};
