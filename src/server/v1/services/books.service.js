export const searchBooks = async (query, limit) => {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${limit}&lang=spa,eng`;

    const response = await fetch(url);

    if (!response.ok) {
        const error = new Error("Error al conectarse con Open Library");
        error.status = 502;
        throw error;
    }

    const data = await response.json();

    // normalizamos la respuesta para devolver solo lo relevante
    const libros = data.docs.map((libro) => ({
        titulo: libro.title,
        autores: libro.author_name ?? [],
        anio: libro.first_publish_year ?? null,
        portada: libro.cover_i ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` : null,
        url: `https://openlibrary.org${libro.key}`,
    }));

    return {
        query,
        total: data.numFound,
        libros,
    };
};