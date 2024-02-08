import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

export default function Search() {
  return (
    <div className="flex items-center">
      <Input placeholder="Busque por uma barbearia..." />
      <Button>
        <SearchIcon size={18} />
      </Button>
    </div>
  );
}
