import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logoBase64 from "@/public/logo-base64";
import ttdBase64 from "@/public/ttd-base64";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: "Times-Roman" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  headerText: {
    textAlign: "right",
    fontSize: 8,
  },
  companyName: {
    color: "red",
  },
  logo: {
    width: 150,
  },
  table: { display: "table", width: "auto", borderStyle: "solid", borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 },
  tableRow: { flexDirection: "row" },
tableNumberCol: {
  width: 30,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#000",
  justifyContent: "center",
  alignItems: "center",
},

tableNumberHeader: {
  fontSize: 10, // kecil untuk header "No"
  fontWeight: "bold",
},

tableNumberCell: {
  fontSize: 9, // lebih kecil untuk angka
  textAlign: "center",
},

tableCol: {
  flex: 1,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#000",
  padding: 4,
},

tableCell: {
  fontSize: 11,
},
  dataSection: {
    margin: 20,
  },
});

export function PdfGenerator({ data }: any) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {/* Logo kiri */}
          <Image style={styles.logo} src={logoBase64} />

          {/* Teks kanan */}
          <View style={styles.headerText}>
            <Text style={styles.companyName}>PT Nusantara Regas</Text>
            <Text>Wisma Nusantara lt.19 Jl. M.H. Thamrin</Text>
            <Text>No. 59 Jakarta Pusat 10050 – Indonesia</Text>
          </View>
        </View>

        <Text style={{ textDecoration: "underline", textAlign: "center", marginBottom: 20, marginTop: 10, fontWeight: "bold", fontSize: 12 }}>SURAT KETERANGAN PEMERIKSAAN KESEHATAN</Text>
        <Text>
          Berikut ini adalah hasil <Text style={{ fontStyle: "italic" }}>review Medical Check-Up (MCU)</Text> dengan detail sebagai berikut :
        </Text>

        <View style={styles.dataSection}>
          {[
            ["Tamu/Kontraktor", data.tamu],
            ["Tempat", "PT Nusantara Regas"],
            ["Kegiatan", data.kegiatan],
          ].map(([label, value], i) => (
            <View key={i} style={{ flexDirection: "row", marginBottom: 4 }}>
              <Text style={{ width: 90 }}>{label}</Text> {/* Kolom label fixed width */}
              <Text>: {value}</Text>
            </View>
          ))}

          <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 20 }}>
            <Text style={{ width: 90 }}>Hasil Review</Text>
            <Text>: </Text>
          </View>

          <View style={styles.table}>
            {/* Header */}
            <View style={styles.tableRow}>
              <View style={styles.tableNumberCol}>
                <Text style={styles.tableNumberHeader}>No</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Nama</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Status Derajat</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Status Kelaikan</Text>
              </View>
            </View>

            {/* Data */}
            {data.orangList.map((orang: any, i: number) => (
              <View key={i} style={styles.tableRow}>
                <View style={styles.tableNumberCol}>
                  <Text style={styles.tableNumberCell}>{i + 1}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{orang.nama}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{orang.statusDerajat}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{orang.statusKelaikan}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <Text>Untuk pekerja dengan status Laik Kerja (P1) atau Laik Kerja dengan catatan (P2-P5) dapat melanjutkan pekerjaan sesuai rencana dan kegiatannya.</Text>
        <Text style={{ marginTop: 20 }}>Demikian yang dapat saya sampaikan. </Text>

        <Text style={{ marginTop: 20 }}>Jakarta, {data.tanggalSurat}</Text>
        <Text>Dokter Pemeriksa</Text>
        <Text>PT Nusantara Regas</Text>
        <Image
          style={{
            width: 100,
            marginTop: -10,
            marginBottom: -10,
          }}
          src={ttdBase64}
        />
        <Text>dr. Edi Rahman</Text>
        <Text>5/321/AS.01.04/V/2024</Text>

        <Text style={{ marginTop: 10, fontSize: 8 }}>
          *Keterangan :{"\n"}
          P1 Tidak ditemukan kelainan medis{"\n"}
          P2 Ditemukan kelainan medis yang tidak serius{"\n"}
          P3 Ditemukan kelainan medis, risiko kesehatan rendah{"\n"}
          P4 Ditemukan kelainan medis bermakna yang dapat menjadi serius, risiko kesehatan sedang{"\n"}
          P5 Ditemukan kelainan medis yang serius, risiko kesehatan tinggi{"\n"}
          P6 Ditemukan kelainan medis yang menyebabkan keterbatasan fisik maupun psikis untuk melakukan pekerjaan sesuai jabatan/posisinya{"\n"}
          P7 Tidak dapat bekerja untuk melakukan pekerjaan sesuai jabatan/posisinya dan/atau posisi apapun, dalam perawatan di rumah sakit, atau dalam status izin sakit
        </Text>
      </Page>
    </Document>
  );
}
