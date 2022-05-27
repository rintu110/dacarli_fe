import * as React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";

const HyperLink = styled("a")(() => ({
  textDecoration: "none",
  textAlign: "unset",
  margin: 0,
  padding: 0,
  color: "unset",
  width: "100%",
  "&:hover": {
    textDecoration: "none",
    textAlign: "unset",
    margin: 0,
    padding: 0,
  },
}));

const Links = styled(Link)(() => ({
  textDecoration: "none",
  color: "unset",
  margin: 0,
  padding: 0,
}));

function NextLink({ href, children }) {
  return (
    <Links href={href} passHref replace>
      <HyperLink>{children}</HyperLink>
    </Links>
  );
}

export default NextLink;
