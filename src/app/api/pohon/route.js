import { supabase } from "@/lib/supabaseClient";

// GET semua pohon
export async function GET() {
  const { data, error } = await supabase.from("pohon").select("*");

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}

// DELETE pohon by id
export async function DELETE(req) {
  const { searchParams } = new URL(req.url); // ambil query param
  const id = searchParams.get("id"); // contoh: /api/pohon?id=123

  if (!id) {
    return Response.json({ error: "id is required" }, { status: 400 });
  }

  const { data, error } = await supabase.from("pohon").delete().eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ message: "Pohon deleted", data });
}
