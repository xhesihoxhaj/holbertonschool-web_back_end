-- 3-glam_rock.sql
-- List all bands with Glam rock as their main style
-- Ranked by their longevity up to the year 2024

SELECT
    band_name,
    COALESCE(split, 2024) - formed AS lifespan
FROM metal_bands
WHERE style LIKE '%Glam rock%'
ORDER BY lifespan DESC;