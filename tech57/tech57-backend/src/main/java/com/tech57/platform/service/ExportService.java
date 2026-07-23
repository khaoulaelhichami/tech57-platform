package com.tech57.platform.service;
import com.lowagie.text.Document;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;
import com.tech57.platform.entity.DemandeStage;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.List;
@Service
public class ExportService {

    public byte[] exportDemandePdf(DemandeStage d) {
        try {
            Document document = new Document();
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            PdfWriter.getInstance(document, out);
            document.open();

            com.lowagie.text.Font titre = new com.lowagie.text.Font(com.lowagie.text.Font.HELVETICA, 18, com.lowagie.text.Font.BOLD);
            com.lowagie.text.Font normal = new com.lowagie.text.Font(com.lowagie.text.Font.HELVETICA, 12);

            document.add(new Paragraph("Tech57 - Fiche de demande de stage", titre));
            document.add(new Paragraph(" "));
            document.add(new Paragraph("Nom : " + d.getNom() + " " + d.getPrenom(), normal));
            document.add(new Paragraph("Email : " + d.getEmail(), normal));
            document.add(new Paragraph("Telephone : " + d.getTelephone(), normal));
            document.add(new Paragraph("Etablissement : " + d.getEtablissement(), normal));
            document.add(new Paragraph("Domaine : " + d.getDomaine(), normal));
            document.add(new Paragraph("Periode : " + d.getPeriodeDebut() + " au " + d.getPeriodeFin(), normal));
            document.add(new Paragraph("Statut : " + d.getStatut(), normal));
            document.add(new Paragraph("Note admin : " + (d.getNoteAdmin() != null ? d.getNoteAdmin() : "-"), normal));

            document.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur generation PDF : " + e.getMessage());
        }
    }

    public byte[] exportDemandesExcel(List<DemandeStage> demandes) {
        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet sheet = workbook.createSheet("Demandes de stage");

            Row header = sheet.createRow(0);
            String[] colonnes = {"Nom", "Prenom", "Email", "Telephone", "Etablissement", "Domaine", "Debut", "Fin", "Statut"};
            for (int i = 0; i < colonnes.length; i++) {
                header.createCell(i).setCellValue(colonnes[i]);
            }

            int rowIdx = 1;
            for (DemandeStage d : demandes) {
                Row row = sheet.createRow(rowIdx++);
                row.createCell(0).setCellValue(d.getNom());
                row.createCell(1).setCellValue(d.getPrenom());
                row.createCell(2).setCellValue(d.getEmail());
                row.createCell(3).setCellValue(d.getTelephone());
                row.createCell(4).setCellValue(d.getEtablissement());
                row.createCell(5).setCellValue(d.getDomaine());
                row.createCell(6).setCellValue(d.getPeriodeDebut() != null ? d.getPeriodeDebut().toString() : "");
                row.createCell(7).setCellValue(d.getPeriodeFin() != null ? d.getPeriodeFin().toString() : "");
                row.createCell(8).setCellValue(d.getStatut().name());
            }

            for (int i = 0; i < colonnes.length; i++) sheet.autoSizeColumn(i);

            workbook.write(out);
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur generation Excel : " + e.getMessage());
        }
    }
}
