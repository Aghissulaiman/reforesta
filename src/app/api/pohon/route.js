import { supabase } from "@/lib/supabaseClient"

// READ all pohon
export async function GET() {
  const { data, error } = await supabase.from("pohon").select("*")

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
  return Response.json(data)
}

// CREATE pohon
export async function POST(req) {
  const body = await req.json()

  const { data, error } = await supabase.from("pohon").insert([body]).select()

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
  return Response.json({ message: "Pohon ditambahkan", data })
}

// UPDATE pohon by id
export async function PUT(req) {
  const body = await req.json()
  const { id, ...updateData } = body

  if (!id) {
    return Response.json({ error: "id is required" }, { status: 400 })
  }

  const { data, error } = await supabase
    .from("pohon")
    .update(updateData)
    .eq("id", id)
    .select()

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
  return Response.json({ message: "Pohon diupdate", data })
}

// DELETE pohon by id (query param ?id=)
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) {
    return Response.json({ error: "id is required" }, { status: 400 })
  }

  const { data, error } = await supabase.from("pohon").delete().eq("id", id)

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
  return Response.json({ message: "Pohon dihapus", data })
}
