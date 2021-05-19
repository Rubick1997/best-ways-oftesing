import { expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import { createRenderer } from "react-test-renderer/shallow";
import Results from "../Results";
import animals from "../animals";
import { StaticRouter } from "react-router-dom";

test("snapshot with no pets", () => {
  const tree = create(<Results pets={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly with some pets", () => {
  const r = createRenderer();
  r.render(<Results pets={animals} />);
  expect(r.getRenderOutput()).toMatchSnapshot();
});
